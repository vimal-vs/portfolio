import NavElements from "../navData.json"

export default function Nav(){
    return (
        <nav className="mt-20 flex flex-col items-start">
            {
                NavElements.map(element => {
                    return(
                        <a key={ element.id } class="group flex items-center py-3 active" href={ element.href }>
                            <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200">
                            </span>
                            <span className="text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{ element.title }
                            </span>
                        </a>
                    )}
                )}
        </nav>
    )
}