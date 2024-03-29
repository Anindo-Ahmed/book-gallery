const Category = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl font-bold">Category</h1>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Category;