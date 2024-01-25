import React, { useState } from 'react'
import './Value.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import data from '../../utils/accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import 'react-accessible-accordion/dist/fancy-example.css'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            
            {/* right side */}
            <div className="v-right flexColStart">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>We always ready to help by providijng the best services for you.
                <br />
                We beleive a good blace to live can make your life better</span>
                <Accordion
                    className='accordion'
                    allowMultipleExpanded= {false}
                    preExpanded={[0]}
                >
                    {
                        data.map((item, i)=> {
                            const [className, setClassName] = useState(null)
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionButton flexCenter'>
                                            <AccordionItemState>
                                                {({expanded}) =>
                                                    expanded
                                                    ? setClassName("expanded")
                                                    : setClassName("collapsed")
                                                }
                                            </AccordionItemState>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className='primaryText'>{item.heading}</span>
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="secondaryText v-paddings">
                                        <div>{item.detail}</div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value