import { createSpace, updateSpace, getSpace } from "@/utils/client";

export default function TestPage() {
  const Init_Spaces = async() => {
    const floor = ["B1", "B2", "B3"];
    const abc = ["A","B","C","D","E","F"];
    for( let k=0; k<3; k++){
      for( let j=0; j<6; j++){
        for( let i=1; i<=20; i++ ){
          await createSpace({
            floor: floor[k],
            section: abc[j],
            number: i, 
            priority: false, 
            occupied: false,
            history: []
          })
        console.log(floor[k],abc[j],i);
        }
      }
    }
  }
  const Update_Spaces = async() => {
    await updateSpace("B1","A",2,{
      occupied: true,
      license: "test-113",
      history: [{license:"test-113", arrivalTime:new Date("2023-12-05T12:17:32.171Z"),departureTime:new Date("2023-12-05T12:17:32.171Z")}]
    })
  }
  const Get_Space = async() => {
    const result = await getSpace("B1","A",1,);
    console.log(result);
  }
  
  return (
    <main className="container max-h-screen max-w-screen">
      {/* 測試功能的按鈕 */}
      <button onClick={Init_Spaces} className="border-2 border-white">
        初始化停車位
      </button>
      <button onClick={Update_Spaces} className="border-2 border-white">
        更新測試
      </button>
      <button onClick={Get_Space} className="border-2 border-white">
        GET測試
      </button>
    </main>
  );
}
