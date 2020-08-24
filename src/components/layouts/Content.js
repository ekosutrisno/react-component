import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ButtonsView from '../../pages/ButtonsView';
import CardsView from '../../pages/CardsView';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activePath: props.location.pathname,
            generalSubItems: [
                {
                    path: '/button', /* path is used as id to check which NavItem is active basically */
                    name: 'button',
                    //   css: 'fa fa-fw fa-home',
                    label: 'Button',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/icon',
                    name: 'icon',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Icon',
                    key: 2
                },
                {
                    path: '/button',
                    name: 'typography',
                    //   css: 'fas fa-hashtag',
                    label: 'Typography',
                    key: 3
                },
                {
                    path: '/card',
                    name: 'card',
                    //   css: 'fas fa-hashtag',
                    label: 'CardsView',
                    key: 4
                },
                {
                    path: '/card-code',
                    name: 'card-code',
                    //   css: 'fas fa-hashtag',
                    label: 'Card Code',
                    key: 5
                },

            ],
            layoutSubItems: [
                {
                    path: 'devider/', /* path is used as id to check which NavItem is active basically */
                    name: 'devider',
                    //   css: 'fa fa-fw fa-home',
                    label: 'Devider',
                    key: 4 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/grid',
                    name: 'grid',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Grid',
                    key: 5
                },
                {
                    path: '/layout',
                    name: 'layout',
                    //   css: 'fas fa-hashtag',
                    label: 'Layout',
                    key: 6
                }, {
                    path: '/space',
                    name: 'space',
                    //   css: 'fas fa-hashtag',
                    label: 'Space',
                    key: 7
                },

                //Cuma buat testing layout aja
                {
                    path: '/testlayout',
                    name: 'testlayout',
                    //   css: 'fas fa-hashtag',
                    label: 'TestLayout',
                    key: 4
                },
            ],
            navigationSubItems: [
                {
                    path: 'affix/', /* path is used as id to check which NavItem is active basically */
                    name: 'affix',
                    //   css: 'fa fa-fw fa-home',
                    label: 'Affix',
                    key: 8 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/breadcrumb',
                    name: 'breadcrumb',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Breadcrumb',
                    key: 9
                },
                {
                    path: '/dropdown',
                    name: 'dropdown',
                    //   css: 'fas fa-hashtag',
                    label: 'Dropdown',
                    key: 10
                }, {
                    path: '/menu',
                    name: 'menu',
                    //   css: 'fas fa-hashtag',
                    label: 'Menu',
                    key: 11
                },
                {
                    path: '/pagination',
                    name: 'pagination',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Pagination',
                    key: 12
                },
                {
                    path: '/pageHeader',
                    name: 'pageheader',
                    //   css: 'fas fa-hashtag',
                    label: 'Page Header',
                    key: 13
                }, {
                    path: '/steps',
                    name: 'steps',
                    //   css: 'fas fa-hashtag',
                    label: 'Steps',
                    key: 14
                },

            ],
            dataEntrySubItems: [
                {
                    path: '/autoComplete', /* path is used as id to check which NavItem is active basically */
                    name: 'autoComplete',
                    //   css: 'fa fa-fw fa-home',
                    label: 'Auto Complete',
                    key: 15 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/checbox',
                    name: 'checkbox',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Checkbox',
                    key: 16
                },
                {
                    path: '/cascader',
                    name: 'cascader',
                    //   css: 'fas fa-hashtag',
                    label: 'Cascader',
                    key: 17
                }, {
                    path: '/datePicker',
                    name: 'datePicker',
                    //   css: 'fas fa-hashtag',
                    label: 'Date Picker',
                    key: 18
                },
                {
                    path: '/form',
                    name: 'form',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Form',
                    key: 19
                },
                {
                    path: '/inputNumber',
                    name: 'inputNumber',
                    //   css: 'fas fa-hashtag',
                    label: 'Input Number',
                    key: 20
                }, {
                    path: '/input',
                    name: 'input',
                    //   css: 'fas fa-hashtag',
                    label: 'Input',
                    key: 21
                },
                {
                    path: '/mentions',
                    name: 'mentions',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Mentions',
                    key: 22
                },
                {
                    path: '/rate',
                    name: 'rate',
                    //   css: 'fas fa-hashtag',
                    label: 'Rate',
                    key: 23
                },
                {
                    path: '/radio',
                    name: 'radio',
                    //   css: 'fas fa-hashtag',
                    label: 'Radio',
                    key: 24
                },
                {
                    path: '/switch',
                    name: 'switch',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Switch',
                    key: 25
                },
                {
                    path: '/slider',
                    name: 'slider',
                    //   css: 'fas fa-hashtag',
                    label: 'Slider',
                    key: 26
                }, {
                    path: '/select',
                    name: 'select',
                    //   css: 'fas fa-hashtag',
                    label: 'Select',
                    key: 27
                },
                {
                    path: '/treeSelect',
                    name: 'treeSelect',
                    //   css: 'fas fa-hashtag',
                    label: 'Tree Select',
                    key: 28
                },
                {
                    path: '/transfer',
                    name: 'transfer',
                    //   css: 'fas fa-hashtag',
                    label: 'Transfer',
                    key: 29
                },
                {
                    path: '/timePicker',
                    name: 'timePicker',
                    //   css: 'fa fa-fw fa-clock',
                    label: 'Time Picker',
                    key: 30
                },
                {
                    path: '/upload',
                    name: 'upload',
                    //   css: 'fas fa-hashtag',
                    label: 'Upload',
                    key: 31
                },
            ],
        };
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    };

    render() {
        const { generalSubItems, layoutSubItems, navigationSubItems, dataEntrySubItems, activePath } = this.state;

        return (
            <Router>
                <div className="pt-18 container-100">
                    <div className="fixed justify-start h-full bg-gray-500 overflow-y-scroll">
                        <div className="py-2">
                            <a className="px-3 font-semibold text-gray-800">General</a>
                        </div>
                        <ul>
                            {
                                generalSubItems.map((item) => {
                                    return (
                                        <li className="text-gray-300">
                                            <Link aria-current="page"
                                                to={item.path}
                                                className="px-2 w-full focus:outline-none focus:bg-green-600 focus:bg-opacity-50 focus:text-gray-300 rounded font-medium py-1 flex items-center justify-between text-gray-300 hover:text-green-400">
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <div className="py-2 ">
                            <a className="px-3 font-semibold text-gray-800">Layout</a>
                        </div>
                        {
                            layoutSubItems.map((item) => {
                                return (
                                    <div className="py-2 ">
                                        <Link className="px-8 font-semibold text-gray-800 focus:outline-none hover:text-green-600" to={item.path}>
                                            {item.label}
                                        </Link>
                                    </div>
                                );
                            })
                        }
                        <div className="py-2 ">
                            <a className="px-3 font-semibold text-gray-800">Navigation</a>
                        </div>
                        {
                            navigationSubItems.map((item) => {
                                return (
                                    <div className="py-2 ">
                                        <Link className="px-8 font-semibold text-gray-800 focus:outline-none hover:text-green-600" to={item.path}>
                                            {item.label}
                                        </Link>
                                    </div>
                                );
                            })
                        }
                        <div className="py-2 ">
                            <a className="px-3 font-semibold text-gray-800">Data Entry</a>
                        </div>
                        {
                            dataEntrySubItems.map((item) => {
                                return (
                                    <div className="py-2 ">
                                        <Link className="px-8 font-semibold text-gray-800 focus:outline-none hover:text-green-600" to={item.path}>
                                            {item.label}
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* <Switch>
                        <Route path="/button" component={ButtonsView} />
                        <Route path="/icon" component={CardsView} />
                    </Switch> */}
                </div>
            </Router>
        );
    }
}

export default Content;
