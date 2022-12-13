
function Hobby({name, icon}) {
    const Icon = icon
    return (
        <div className="flex gap-2 align-middle">
            <Icon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <h3 className="font-medium text-gray-900 text-xs">{name}</h3>
        </div>
    );
}

export default Hobby;
