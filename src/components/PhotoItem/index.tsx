import * as C from './styles';

type Props = {
    url: string;
    name: string;
    onDelete: (name:string) => void;
}

export const PhotoItem = ({ url, name, onDelete }:Props) => {
    return(
        <C.Container>
            <div>
                <img src={url} alt={name} />
                {name}
            </div>
            <button onClick={()=>onDelete(name)} >Deletar</button>
        </C.Container>
    );
}