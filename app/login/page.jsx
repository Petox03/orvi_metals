import { LogInComponent } from '@/components/LogInComponent';


export default function LoginPage() {
    return (

        <div className="relative md:static grid grid-cols-1 md:grid-cols-3 justify-items-center">
            <div className="z-10 p-5 | absolute md:static | container min-h-screen | grid justify-items-center items-center bg-white dark:bg-[#0c0c0c]">
                <LogInComponent/>
            </div>
            <div className="z-0 absolute md:static container col-span-2 bg-repeat bg-center min-h-screen" style={{ backgroundImage: "url('img/orvimetals.jpg')" }}>

            </div>
        </div>
    );
}