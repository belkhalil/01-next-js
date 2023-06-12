import {useRouter} from 'next/router'

const DetailPage = () => {

    const router = useRouter();

    const newsId = router.query.newsId;

    console.log(newsId);

    return <div>The Detail Page</div>
}
export default DetailPage;