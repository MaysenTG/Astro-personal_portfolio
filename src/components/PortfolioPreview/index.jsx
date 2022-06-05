
import Styles from './styles.module.scss';

function PortfolioPreview({ project }) {
	const frontmatter = project;
	return (
		<div className={Styles.card} style={`background-image:url(${frontmatter.projectImage.url}); background-size: contain;`}>
			<div className={Styles.titleCard}>
				<h1 className={Styles.title}></h1>
			</div>
			<div className="pa3">
				<a className={Styles.link} href={project.url}>
					<p style="font-size: 2.5vw;" className="ml2 mr2">{frontmatter.title}</p>
					<p style="font-size: 1vw;" className="ml2 mr2">{frontmatter.skills}</p>
					<p style="font-size: 1vw;" className={`${Styles.desc} ml2 mr2 mt0 mb2`}>{frontmatter.description}</p>
					<div className="ml2" style="display: flex; flex-direction: row;">
						<span className={Styles.linkInner}>Github</span>&nbsp;
						<span className={Styles.linkInner}>Live preview</span>
					</div>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
