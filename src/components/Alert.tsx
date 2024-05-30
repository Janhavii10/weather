import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import React from "react";
import { toast } from "react-toastify";
import { HiMiniBellAlert } from "react-icons/hi2";

export interface AlertProps {
    temp: string;
    humidity: string;
    windSpeed: string;

}

export default function Alert(props: AlertProps) {

    const {

        humidity = "61%",
        windSpeed = "7 km/h",
        temp = "22",

    } = props;

    const tempC = convertKelvinToCelsius(parseFloat(temp));
    const wind = parseFloat(windSpeed);

    const alerts = () => {
        {/* toast.success('yay') */ }
        if (tempC >= 35) {
            toast.error('Excessive Heat!');
        } else if (tempC >= 20 && tempC < 35) {
            if (wind > 60) {
                toast.warning('Ideal weather but High Wind: Cyclone Expected, Take Caution!');
            } else if (wind > 5) {
                toast.warning('Ideal weather with high wind!');
            } else {
                toast.success('Ideal weather!');
            }
        } else if (tempC < 20 && tempC >= 5) {
            toast.success('Cool weather!');
        } else {
            if (wind > 10) {
                toast.warning('Cold weather with High Wind: Frostbite Alert!');
            } else if (wind > 5) {
                toast.warning('Cold weather with high winds: Take Caution!');
            }
        }
    }

    return (

        <button onClick={alerts}>
            <HiMiniBellAlert className='text-3xl mt-1 text-gray-400' />
        </button>

    )
}

