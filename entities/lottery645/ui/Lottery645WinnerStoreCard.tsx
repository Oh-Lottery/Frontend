import { Card, CardHeader } from "@nextui-org/card";
import { Listbox, ListboxSection, ListboxItem, cn } from "@nextui-org/react";
import { Lottery645WinnerStoreDto } from "../model/get";

interface Lottery645WinnerStoreCardProps {
  stores: Lottery645WinnerStoreDto[];
}

const Lottery645WinnerStoreCard = ({
  stores,
}: Lottery645WinnerStoreCardProps) => {
  const list = (() => {
    const storeMap = new Map();

    // 중복 제거 및 중복 횟수 카운트
    stores.forEach((store) => {
      const { storeId, storeName, storeAddress } = store;
      if (storeMap.has(storeId)) {
        storeMap.get(storeId).count += 1;
      } else {
        storeMap.set(storeId, { storeName, storeAddress, count: 1 });
      }
    });

    // 중복 횟수를 storeName에 추가
    const deduplicatedStores = Array.from(storeMap.entries()).map(
      ([storeId, { storeName, storeAddress, count }]) => {
        const updatedStoreName =
          count > 1 ? `${storeName}(${count})` : storeName;
        return { storeId, storeName: updatedStoreName, storeAddress };
      }
    );

    // 그룹화 및 정렬
    const grouped = deduplicatedStores.reduce(
      (grouped: Record<string, Lottery645WinnerStoreDto[]>, store) => {
        // 주소에서 시 정보 추출 ("서울", "부산" 등)
        const city = store.storeAddress.split(" ")[0];

        // 해당 시가 그룹에 없으면 초기화
        if (!grouped[city]) {
          grouped[city] = [];
        }

        // 해당 시 그룹에 추가
        grouped[city].push(store);

        return grouped;
      },
      {}
    );

    const sortedGrouped = Object.keys(grouped).reduce(
      (sorted: Record<string, Lottery645WinnerStoreDto[]>, city: string) => {
        sorted[city] = [...grouped[city]].sort((a, b) =>
          a.storeName.localeCompare(b.storeName, "ko")
        );
        return sorted;
      },
      {}
    );

    return sortedGrouped;
  })();
  // TODO: 나중에 백엔드 단에서 구조화된 데이터를 받아오도록 수정

  const handleStoreClick = (storeAddress: string) => {
    window.open(
      `https://map.naver.com/p/search/${encodeURIComponent(storeAddress)}`,
      "_blank"
    );
  };

  return (
    <Card className={cn("p-4")}>
      <CardHeader className="flex items-center justify-between gap-3">
        <h2 className={cn("text-md flex items-center gap-4")}>
          1등 당첨 매장 ({stores.length})
        </h2>
      </CardHeader>
      <Listbox>
        {Object.entries(list).map(([city, stores]) => (
          <ListboxSection key={city} title={city}>
            {stores.map((store) => (
              <ListboxItem
                description={store.storeAddress}
                key={store.storeId}
                onClick={() => handleStoreClick(store.storeAddress)}
              >
                {store.storeName}
              </ListboxItem>
            ))}
          </ListboxSection>
        ))}
      </Listbox>
    </Card>
  );
};

export default Lottery645WinnerStoreCard;
