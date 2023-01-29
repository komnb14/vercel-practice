import Time from "../../components/Time";
import {ErrorBoundary} from "react-error-boundary";
import {GetStaticProps} from "next";

type staticProps = {
    time: string;
}
export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
            time: new Date().toString(),
        },
        revalidate: 20,
    }
}

export default function Home({time}: staticProps) {

    return (
        <>
            <ErrorBoundary fallback={<>Something went wrong</>}>
                <Time time={time}/>
            </ErrorBoundary>
        </>
    )
}
