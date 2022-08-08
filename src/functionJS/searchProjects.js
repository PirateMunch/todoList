export default function searchFunction() {
    let users = [];
    const searchInput = document.querySelector('[data-search]');
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        projectCards();
        function projectCards() {
            const currentStorage = JSON.parse(localStorage.getItem('projects'));
            // return an Array of objects linked to Dom Element
            users = currentStorage.map((element) => {
                let thisElement = document.getElementById(`${element.index}`);
                let thisList = element.list.join();
                return {
                    element: thisElement,
                    title: element.title,
                    description: element.description,
                    list: thisList,
                };
            });
        }
        //on input, loops thru projects hiding Divs not Included(Value of input)
        users.forEach((user) => {
            const isVisible =
                user.title.toLowerCase().includes(value) ||
                user.description.toLowerCase().includes(value) ||
                user.list.toLowerCase().includes(value);
            user.element.classList.toggle('hideSearch', !isVisible);
        });
    });
}
