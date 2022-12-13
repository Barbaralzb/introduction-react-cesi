
function Button({outline, href, title, onClick}) {
    return (
        <a
            className={`cursor-pointer ${outline ? "inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20" : "inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"}`}
            href={href && "" }
            onClick={onClick}
        >
            {title}
        </a>
    );
}

export default Button;
