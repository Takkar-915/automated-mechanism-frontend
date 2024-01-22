import { useParams, useLocation } from "react-router-dom"
import { DefaultLayout } from "../templates/DefaultLayout"
export const MechanismDetail = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    return (
        <DefaultLayout>
            <div>
                <h1>UrlParameterページです</h1>
                <p>パラメータは{id}です。</p>
                <p>クエリパラメータは{query.get("name")}</p>
            </div>
        </DefaultLayout>
    )
}

