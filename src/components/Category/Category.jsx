const Category = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl font-bold text-center my-10">Books Category</h1>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                    What is the "Fiction" category?
                </div>
                <div className="collapse-content"> 
                    <p>Fiction books are imaginative works that are not based on real events. They often explore characters, settings, and plots that are created by the author's imagination. Examples of fiction categories include: <br />

                    Literary Fiction: Character-driven stories with an emphasis on style, depth, and literary merit. <br />
                    Mystery/Thriller: Books that focus on suspense, intrigue, and solving a mystery or crime. <br />
                    Romance: Stories centered around romantic relationships and love interests. <br />
                    Science Fiction/Fantasy: Books that feature speculative elements such as futuristic technology, magical worlds, and supernatural beings. <br />
                    Historical Fiction: Novels set in the past that incorporate historical events, settings, and characters.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                What is the "Non-Fiction" category?
                </div>
                <div className="collapse-content"> 
                    <p>Non-fiction books are based on real events, facts, and information. They aim to educate, inform, or provide insights into specific topics. Examples of non-fiction categories include: <br />

                    Biography/Memoir: Books that recount the life stories and experiences of individuals, often written by themselves or by someone else. <br />
                    Self-Help/Personal Development: Books that offer guidance, advice, and strategies for self-improvement and personal growth. <br />
                    History: Books that delve into past events, civilizations, cultures, and historical figures.
                    Science/Nature: Books that explore scientific principles, discoveries, and phenomena, as well as topics related to the natural world. <br />
                    Travel: Books that document travel experiences, destinations, and adventures.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Please tell me about "Young Adult (YA)".
                </div>
                <div className="collapse-content"> 
                    <p>Young adult books are targeted towards adolescent readers, typically aged between 12 and 18 years old. These books often feature protagonists who are teenagers and address themes relevant to young adults, such as identity, friendship, and coming-of-age</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Please tell me about "Childen books".
                </div>
                <div className="collapse-content"> 
                    <p>Children's books are tailored for young readers, typically aged between 0 and 12 years old. They include picture books, early readers, chapter books, and middle-grade novels, covering a wide range of topics and themes suitable for different age groups.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-6">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Please tell me about "Poetry".
                </div>
                <div className="collapse-content"> 
                    <p>Poetry books consist of written works that express emotions, ideas, and experiences through rhythmic language, imagery, and symbolism. They encompass various forms and styles of poetry, including free verse, sonnets, haiku, and lyrical poetry.</p>
                </div>
            </div>
        </div>
    );
};

export default Category;