
export default function HomeBanner() {
    return (
        <>
            <div className="absolute left-0 my-12 | h-72 w-full | flex justify-center items-center" style={{ backgroundImage: "url('/img/homePage/orvi-blue2.jpg')" }}>
                <h1 className="text-white text-5xl md:text-7xl">Top Best Sellers</h1>
            </div>
            <div className="container h-96"></div>
        </>
    );
}