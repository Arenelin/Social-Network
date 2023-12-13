import iconsSprite from '../../assets/images/icons-sprite.svg'


type IconPropsType = {
    w?:string
    h?:string
    viewBox?:string
    iconId:string
}

export function Icon(props:IconPropsType){
    return (
        <svg width={props.w || '50px'} height={props.h || '50px'} viewBox={props.viewBox} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}