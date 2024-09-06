export default function Product(){
    const Family = [
        {id:1, responsibities:"family", goal: "money"},
        {id:2, responsibities:"Health", goal: "Healthy"},
        {id:3, responsibities:"parents", goal: "goodLife"},
        {id:4, responsibities:"siblings", goal: "Comfort"},
    ];
    return (
        <div>
            {Family.map((Product) => (
                <h1 key={Product.id}>{Product.responsibities}: {Product.goal}</h1>
            ))}
        </div>
    );
}