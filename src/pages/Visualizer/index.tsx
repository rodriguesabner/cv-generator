import YellowCV from "./YellowCV"
import BlueCV from "./BlueCV"
import SimpleCV from "./SimpleCV"
import CVNotFound from "./NotFound"
import { useEffect, useState } from "react"
import { setCV } from "../../store/reducers/cv.reducer"
import { useAppDispatch } from "../../store/hooks"
import useCVHook from "../../hooks/useCV.hook"

const Visualizer = () => {
    const [hasData, setHasData] = useState(false);
    const [loading, setLoading] = useState(true);
    const cv = useCVHook();

    const dispatch = useAppDispatch();

    useEffect(() => {
        function getLocalData() {
            const item = localStorage.getItem('curriculumVitae')
            if (item == null) {
                return;
            }

            const data = JSON.parse(item)
            dispatch(setCV(data));
            setHasData(true);
        }

        if (cv.personalInfo.firstName === "") {
            getLocalData();
        } else {
            setHasData(true);
        }

        setLoading(false);
    }, [cv.personalInfo.firstName]);

    return (
        loading ? (
            <div>
                <h1>
                    Carregando...
                </h1>
            </div>
        ) : (
            hasData ? (
                <SimpleCV />
            ) : (
                <CVNotFound />
            )
        )
    )
}

export default Visualizer;