export default function CustomSelect({label, options}){
    return(
        <div className="w-full flex flex-col gap-2">
            <label className="text-[17px] font-bold">{label}</label>
            <select className="w-full h-[45px] rounded-lg p-2 bg-[#141414] border border-[#ffffff1a] focus:border-purple-400 outline-none">
                <option>Selecione...</option>
                <option value={"Michele"}>Michele</option>
                <option>Lanui</option>
                <option>Paulo</option>

                {options.map((opcao) => {
                    return (
                        <option 
                        className=""
                        key={opcao} value={opcao}>{opcao}</option>
                    )
                })}
            </select>
        </div>
    )
}