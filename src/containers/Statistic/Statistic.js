//var React = require('react');
//var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react');
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Statistic.scss';
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default class Statistic extends Component {
    handleChange = (event) => {
        this.setState({
            year: event.target.value
        })

        if(event.target.value==2021){
            this.setState({
                armavirg: 47,
                aragacotng:48,
                araratg:46,
                shirakg:47,
                kotayqg:48,
                lorig:49,
                tavushg:47,
                syuniqg:48,
                vayocg:49,
                erevang:48,
                gexarquniqg:46,
                armavirb: 53,
                aragacotnb:52,
                araratb:54,
                shirakb:53,
                kotayqb:52,
                lorib:51,
                tavushb:53,
                syuniqb:52,
                vayocb:51,
                erevanb:52,
                gexarquniqb:54,
                armavir:113,
                ararat:117,
                aragacotn:108,
                shirak:113,
                kotayq:108,
                lori:104,
                tavush:113,
                syuniq:108,
                vayoc:104,
                erevan:108,
                gexarquniq:117

            })
        } else if(event.target.value==2020){
            this.setState({
                armavirg: 48,
                aragacotng:44,
                araratg:47,
                shirakg:48,
                kotayqg:48,
                lorig:49,
                tavushg:46,
                syuniqg:49,
                vayocg:47,
                erevang:48,
                gexarquniqg:43,

                armavirb: 52,
                aragacotnb:56,
                araratb:53,
                shirakb:52,
                kotayqb:52,
                lorib:51,
                tavushb:54,
                syuniqb:51,
                vayocb:53,
                erevanb:52,
                gexarquniqb:57,

                armavir:112,
                ararat:118,
                aragacotn:109,
                shirak:111,
                kotayq:109,
                lori:104,
                tavush:109,
                syuniq:108,
                vayoc:104,
                erevan:109,
                gexarquniq:115
            })
        }else if(event.target.value==2019){
            this.setState({
              

                erevan:109,
                aragacotn:124,
                ararat:113,
                armavir:107,
                gexarquniq:129,
                lori:103,
                kotayq:107,
                shirak:106,
                syuniq:102,
                vayoc:116,
                tavush:115
            })
        }else if(event.target.value==2018){
          this.setState({
              armavirg: 47,
              aragacotng:46,
              araratg:47,
              shirakg:47,
              kotayqg:48,
              lorig:49,
              tavushg:46,
              syuniqg:49,
              vayocg:47,
              erevang:48,
              gexarquniqg:43,

              armavirb: 52,
              aragacotnb:56,
              araratb:53,
              shirakb:52,
              kotayqb:52,
              lorib:51,
              tavushb:54,
              syuniqb:51,
              vayocb:53,
              erevanb:52,
              gexarquniqb:57,

              armavir:113,
              ararat:111,
              aragacotn:116,
              shirak:112,
              kotayq:108,
              lori:107,
              tavush:117,
              syuniq:112,
              vayoc:107,
              erevan:108,
              gexarquniq:123
          })
      }else if(event.target.value==2017){
        this.setState({
          

            erevan:111,
            aragacotn:116,
            ararat:109,
            armavir:107,
            gexarquniq:109,
            lori:114,
            kotayq:105,
            shirak:103,
            syuniq:105,
            vayoc:105,
            tavush:121
        })
    }else if(event.target.value==2016){
        this.setState({
          

            erevan:106,
            aragacotn:120,
            ararat:118,
            armavir:121,
            gexarquniq:122,
            lori:108,
            kotayq:109,
            shirak:121,
            syuniq:108,
            vayoc:113,
            tavush:110
        })
    }else if(event.target.value==2015){
        this.setState({
          

            erevan:111,
            aragacotn:113,
            ararat:116,
            armavir:113,
            gexarquniq:123,
            lori:110,
            kotayq:115,
            shirak:110,
            syuniq:108,
            vayoc:93,
            tavush:119
        })
    }else if(event.target.value==2014){
        this.setState({
          

            erevan:112,
            aragacotn:120,
            ararat:115,
            armavir:117,
            gexarquniq:114,
            lori:104,
            kotayq:114,
            shirak:120,
            syuniq:113,
            vayoc:114,
            tavush:114
        })
    }else if(event.target.value==2013){
        this.setState({
          

            erevan:111,
            aragacotn:113,
            ararat:113,
            armavir:113,
            gexarquniq:118,
            lori:112,
            kotayq:111,
            shirak:117,
            syuniq:115,
            vayoc:117,
            tavush:117
        })
    }
      };

    state={
        armavirg: 47,
        aragacotng:48,
        araratg:46,
        shirakg:47,
        kotayqg:48,
        lorig:49,
        tavushg:47,
        syuniqg:48,
        vayocg:49,
        erevang:48,
        gexarquniqg:46,
        armavirb: 53,
        aragacotnb:52,
        araratb:54,
        shirakb:53,
        kotayqb:52,
        lorib:51,
        tavushb:53,
        syuniqb:52,
        vayocb:51,
        erevanb:52,
        gexarquniqb:54,
        year: 2021,
        armavir:113,
        ararat:117,
        aragacotn:108,
        shirak:113,
        kotayq:108,
        lori:104,
        tavush:113,
        syuniq:108,
        vayoc:104,
        erevan:108,
        gexarquniq:117

    }
	render() {
		const options = {
			title: {
				text: `Հայաստանում ${this.state.year} թվականին ծնված տղաների և աղջիկների հարաբերակցությունը ըստ մարզերի`
			},
			toolTip: {
				shared: true
			},
			legend: {
				verticalAlign: "top"
			},
			axisY: {
				suffix: "%"
			},
			data: [{
				type: "stackedBar100",
				color: "#483184",
				name: "Աղջիկ",
				showInLegend: true,
				indexLabel: "{y}",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: "Արմավիր",   y: 10000/(this.state.armavir+100) },
					{ label: "Արագածոտն",   y: 10000/(this.state.aragacotn+100) },
					{ label: "Արարատ",   y: 10000/(this.state.ararat+100) },
					{ label: "Շիրակ",   y: 10000/(this.state.shirak+100) },
					{ label: "Կոտայք",   y: 10000/(this.state.kotayq+100) },
					{ label: "Լոռի",   y: 10000/(this.state.lori+100) },
					{ label: "Տավուշ",   y: 10000/(this.state.tavush+100) },
					{ label: "Սյունիք",   y: 10000/(this.state.syuniq+100) },
					{ label: "Վայոց ձոր",   y: 10000/(this.state.vayoc+100) },
					{ label: "Երևան",   y: 10000/(this.state.erevan+100) },
					{ label: "Գեղարքունիք",   y: 10000/(this.state.gexarquniq+100) }
				]
			},{
				type: "stackedBar100",
				color: "#29A0B1",
				name: "Տղա",
				showInLegend: true,
				indexLabel: "{y}%",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: "Արմավիր",   y: (this.state.armavir*100)/(this.state.armavir+100) },
					{ label: "Արագածոտն",   y: (this.state.aragacotn*100)/(this.state.aragacotn+100)},
					{ label: "Արարատ",   y: (this.state.ararat*100)/(this.state.ararat+100)},
					{ label: "Շիրակ",   y: (this.state.shirak*100)/(this.state.shirak+100) },
					{ label: "Կոտայք",   y: (this.state.kotayq*100)/(this.state.kotayq+100) },
					{ label: "Լոռի",   y: (this.state.lori*100)/(this.state.lori+100) },
					{ label: "Տավուշ",   y: (this.state.tavush*100)/(this.state.tavush+100) },
					{ label: "Սյունիք",   y: (this.state.syuniq*100)/(this.state.syuniq+100) },
					{ label: "Վայոց ձոր",   y: (this.state.vayoc*100)/(this.state.vayoc+100) },
					{ label: "Երևան",   y: (this.state.erevan*100)/(this.state.erevan+100) },
					{ label: "Գեղարքունիք",   y: (this.state.gexarquniq*100)/(this.state.gexarquniq+100) }
				]
			}]
		}
        ///////////////
        const options2 = {
			title: {
				text: `${this.state.year} թվականին  100 աղջկա դիմաց ծնված տղաների քանակը `
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Գեղարքունիք",  y: this.state.gexarquniq  },
					{ label: "Երևան", y: this.state.erevan  },
					{ label: "Վայոց Ձոր", y: this.state.vayoc  },
					{ label: "Սյունիք",  y: this.state.syuniq  },
					{ label: "Տավուշ",  y: this.state.tavush  },
					{ label: "Լոռի",  y: this.state.lori  },
					{ label: "Կոտայք",  y: this.state.kotayq  },
					{ label: "Շիրակ",  y: this.state.shirak  },
					{ label: "Արարատ",  y: this.state.ararat  },
					{ label: "Արագածոտն",  y: this.state.aragacotn  },
					{ label: "Արմավիր",  y: this.state.armavir  }

				]
			}
			]
		}
		return (
            <>
		<div className='Statistic'>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
     <div className='select'>
        <InputLabel id="demo-simple-select-label">Տարեթիվ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.year}
          label="Age"
          onChange={this.handleChange}
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          
        </Select>
        </div>
        <div className='Statistic2'>
			<CanvasJSChart options = {options2}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		</div>
           
      
      
    
    </>
		);
	}
}
                             