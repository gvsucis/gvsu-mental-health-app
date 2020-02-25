import React from 'react';
import View from './view_models/view';
import { IonList } from '@ionic/react';
import ScrollTile from '../components/scroll-tile';

export default class FAQView extends React.Component {
    // we can make a fetch call from the store once that is made to get this
    questions: [string, string][] = [["Will I be breaking confidentiality if I share my concerns about a student with someone else?", "Answer 1"],
        ["I want to make sure the student I reffered is safe/got help. Is this possible?", "Answer 2"],
        ["What if I'm worried about someone who is not a student (myself, a faculty or staff member, etc.)?", "Answer 3"],
        ["What is a Care Report and when should I file one?", "Answer 4"],
        ["What does UCC do?", "Answer 5"],
        ["What is my role in student mental health", "Answer 6"]];

    public render() {
        const body = (
            <IonList lines = "none">
                <div className="view-body">
                    {this.renderBody()}
                </div>
            </IonList>
            
        );

        return (
            <View title="FAQ" route = "/faq" body = {body} />
        );
    }

    public renderBody() {
        return (
            <IonList>
                {
                    this.questions.map((i) => {
                        return (<ScrollTile label={i[0]} description={i[1]} enableDropdown={true}/>)
                    })
                }
            </IonList>
        )
    }
}