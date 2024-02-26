import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {useEffect, useState} from "react";
import {ICar} from "../../interfces/carInterface";
import {carService} from "../../services/carService";

const CarContainer = () => {

    const [cars, setCars] = useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);

    const changeTrigger=()=>{
        setTrigger(prev=>!prev)
    }


    
    return (
        <div>
            <CarForm changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarContainer};