import World from '../../assets/images/background_world.png'
import './index.css'

export default function Background() {
	return (
		<div className="background">
			<div>
				<picture>
					<source srcSet={World} type="image/avif" />
					<img src={World} alt="" className="" />
				</picture>
			</div>
		</div>
	)
}
