import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
	return (
		<Card>
			<CardHeader>
				<h1 className="text-center">Learning Zion</h1>
			</CardHeader>

			{/* <CardDescription className="text-2xl text-center">
				Rooted in the Land. Built by Pioneers. Shaped by Community.
			</CardDescription> */}
			<CardContent>
				<p className="text-center">
					This website is being updated. Check back soon!
				</p>
			</CardContent>
		</Card>
	)
}
