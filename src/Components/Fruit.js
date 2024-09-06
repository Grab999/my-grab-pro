export default function Fruit(){
    const fruit = ["Apple", "Mango", "Orange"];
    const fruitList = fruit.map((fruit,index) =>(
        <h1 key={index}>
            {fruit}
        </h1>
    ))
    return (
        <div>{fruitList}</div>
    )
}