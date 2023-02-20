import './Links.css'

const Links = () => {
    const listaRedes = [
        {id:0, nome:'GitHub', urlRede:'https://github.com/smkhb'},
        {id:1, nome:'LinkedIn', urlRede:'https://www.linkedin.com/in/samuelbernardo/'},
        {id:2, nome:'Twitter', urlRede:'https://twitter.com/Smk_hb' },
        {id:3, nome:'Instagram', urlRede: 'https://www.instagram.com/samuka_hb/'},
        {id:4, nome:'Vercel', urlRede: 'https://vercel.com/smkhb'}
    ]
    
    const LinksRedes = listaRedes.map(props => 
        <div key={props.id} className='Lista-Links'>
            <a href={props.urlRede} target="_blank">{props.nome}</a>
        </div>
    )
    return (
        <>
            {LinksRedes}
        </>
    )
}
export default Links