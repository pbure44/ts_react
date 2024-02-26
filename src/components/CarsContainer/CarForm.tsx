import {SubmitHandler, useForm} from "react-hook-form";
import {FC, useEffect} from "react";

import {ICar} from "../../interfces/carInterface";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/setStateType";

interface IProps {
    changeTrigger: () => void;
    carForUpdate: ICar
    setCarForUpdate: ISetState<ICar>
}

const CarForm: FC<IProps> = ({changeTrigger, carForUpdate, setCarForUpdate}) => {
    const {
        reset, register, handleSubmit,
        setValue
    } = useForm<ICar>()

    useEffect(() => {
        if(carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year', carForUpdate.year,{shouldValidate:true})
        }
    }, [carForUpdate,setValue]);

    const save: SubmitHandler<ICar> = async (car) => {
        console.log(car);
        await carService.create(car);
        changeTrigger();
        setCarForUpdate(null);
        reset();
    }

    const updateCar: SubmitHandler<ICar> = async (car) => {
        console.log(carForUpdate.id);
        console.log(car);
        await carService.updateById(carForUpdate.id, car);
        changeTrigger();
        reset();

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? updateCar : save)}>
            <input type="text" placeholder="brand" {...register('brand')}/>
            <input type="text" placeholder="price" {...register('price')}/>
            <input type="text" placeholder="year" {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};