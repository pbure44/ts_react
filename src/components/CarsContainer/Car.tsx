import {FC} from "react";
import {ICar} from "../../interfces/carInterface";
import {ISetState} from "../../types/setStateType";

interface IProps {
    car: ICar,
    setCarForUpdate:ISetState<ICar>
}

const Car: FC<IProps> = ({car,setCarForUpdate}) => {
    const {id,brand,price,year}=car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button>delete</button>
        </div>
    );
};

export {Car};