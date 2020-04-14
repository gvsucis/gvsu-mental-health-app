import React from 'react'
import { classNames } from '../../utils/system'
import VideoPlayer from '../video_player'

export interface TextBlockProps {
    input: string
}

export default class TextBlock extends React.Component<TextBlockProps> {
    public render() {
        const sections = []
        const curr = this.props.input
        let index = 0
        for (let i = 0; i < curr.length; i++) {
            if (curr[i] === '\n') {
                sections.push(curr.substr(index, (i - index)))
                index = i + 1
            }
        }

        if (sections.length === 0) {
            sections.push(curr)
        }
        else {
            sections.push(curr.substr(index))
        }

        return sections.map((sec, idx) => {
            let tabbed = false
            let link = null
            let linkDest = null
            let vidLink = null
            let video = null

            if (sec[0] === '-') {
                tabbed = true
            }

            if (sec.includes("[link")) {
                linkDest = sec.substr(sec.indexOf('[') + 5, sec.indexOf(']') - (sec.indexOf('[') + 5))
                link = (
                    <a href={linkDest}>
                        {linkDest.substr(13)}
                    </a>
                )
            }

            if (sec.includes("[video")) {
                vidLink = sec.substr(sec.indexOf('[') + 6, sec.indexOf(']') - (sec.indexOf('[') + 6))
                video = (
                    <VideoPlayer video={vidLink}/>
                )
            }
            let output = link && linkDest ? sec.substr(0, sec.length - (linkDest.length + 6)) : video && vidLink ? sec.substr(0, sec.length - (vidLink.length + 7)) : sec
            const outputClasses = classNames("faq-view__dropdown-section", [
                { name: "faq-view__dropdown-section--tabbed", include: tabbed }
            ])
            return (
                <div className={outputClasses} key={idx}>
                    {output}
                    {link}
                    {video}
                </div>
            )
        }
        )
    }
}
