import {Timer} from "@/components/Timer";
import {Background} from "@/components/Background";

export function CountDownPage() {
    return (
        <>
            <Background/>
            <section className="grid place-content-center h-screen">
                <Timer/>
            </section>
        </>
    )
}