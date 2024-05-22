import {Timer} from "@/components/Timer";
import {Background} from "@/components/Background";
import {useRest} from "@/utils/hooks/useRest";

export default function CountDownPage() {
    const now = useRest()
    return (
        <>
            <Background/>
            <section className="grid place-content-center h-screen">
                <Timer initialTime={now}/>
            </section>
        </>
    )
}