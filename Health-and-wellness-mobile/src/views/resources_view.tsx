
import React, {useState} from 'react';
import View from './view_models/view';
import { IonList, IonInfiniteScrollContent } from '@ionic/react';
import ScrollTile from '../components/scroll-tile';
import InfiniteScroll from '../components/infinite-scroll';
import Slides from '../components/horizontal-slides';
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
export default class ResourcesView extends React.Component {
  @observable i: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  public render() {
    const body = (
      <>
        <IonList lines="none">
          <div className="view-body">
            {this.renderBody()}
          </div>
        </IonList>
      </>
    )
    return (
      <View title="Resources" route="/resources" body={body} />
    )
  }

  private renderBody() {
    
    let arr = ["Suicidal Tendencies", "Excessive Absence", "Violent Outburst", "Panic Attack"];
    
    return (
      <><IonList>
        {
          this.i.map((j)=>{
            return <Slides slides={arr} />
          })
        }
      </IonList>
      <InfiniteScroll threshold={'100px'} infinite={this.onInfinite} />
        
        {/* <ScrollTile label="Suicidal Tendencies" enableDropdown={true} />
        <ScrollTile label="Excessive Absence" enableDropdown={true} />
        <ScrollTile label="Violent Outbursts" enableDropdown={true} />
        <ScrollTile label="Panic Attack" enableDropdown={true} />
        <ScrollTile label="Suicidal Tendencies" enableDropdown={true} />
        <ScrollTile label="Excessive Absence" enableDropdown={true} />
        <ScrollTile label="Violent Outbursts" enableDropdown={true} />
        <ScrollTile label="Panic Attack" enableDropdown={true} />
        <ScrollTile label="Suicidal Tendencies" enableDropdown={true} />
        <ScrollTile label="Excessive Absence" enableDropdown={true} />
        <ScrollTile label="Violent Outbursts" enableDropdown={true} /> */}

      </>)
      
      }
      private onInfinite = (e: CustomEvent<void>) => {
        this.i = [...this.i,0,0,0,0,0,0,0,0,0];
        (e.target as HTMLIonInfiniteScrollElement).complete();
      }
}

