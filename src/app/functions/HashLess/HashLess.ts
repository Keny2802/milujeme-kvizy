const HashLess = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
) => {
    e.preventDefault();

    const targetHash = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(`${targetHash}`);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    };
};

export default HashLess;