import Head from 'next/head'
import { FC } from 'react'
import { getPosts } from '@lib/posts'
import { IPost } from '@lib/types'
import { Header, Card } from '@components/common/'

export async function getStaticProps(context) {
	const posts = await getPosts()

	if (!posts) {
		return {
			notFound: true,
		}
	}

	return {
		props: { posts },
	}
}

interface Props {
	posts: IPost[]
}

const Home: FC<Props> = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Teresa Escribe Blog</title>
				<meta name='description' content='Teresa Escribe blog de literatura' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			{posts.map(
				({
					id,
					title,
					excerpt: description,
					feature_image: imgSrc,
					slug: href,
				}: IPost) => (
					<Card key={id} {...{ title, description, imgSrc, href }} />
				)
			)}
		</div>
	)
}

export default Home
