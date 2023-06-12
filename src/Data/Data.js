   import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilMoneyWithdrawal,
    UilUsdSquare
   } from '@iconscout/react-unicons'

   export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUsersAlt,
        heading: "Costumers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    },
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
   ]

   export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround : "linear-gradient(180deg, #E2263C 0%, #A2133E 100%)",
            boxShadow: "0px 10px 20px 0px #FCDFCF",
        },
        barValue: 70,
        value: "25.970",
        png: UilUsdSquare,
        series: [{
            name: "Sales",
            data: [31,40,28,51,109,100],   
        }],
    },
    {
        title: "Buy",
        color: {
            backGround : "linear-gradient(180deg, #007AC1 0%, #0F394C 100%)",
            boxShadow: "0px 10px 20px 0px #D3E9FF",
        },
        barValue: 80,
        value: "14.270",
        png: UilMoneyWithdrawal,
        series: [{
            name: "Buy",
            data: [10,100,50,70,80,30,40],   
        }],
    },
    {
        title: "Send",
        color: {
            backGround : "linear-gradient(180deg,#E0574A 0%, #CC1616 100%)",
            boxShadow: "0px 10px 20px 0px #FFD6C0",
        },
        barValue: 60,
        value: "25.970",
        png: UilClipboardAlt,
        series: [{
            name: "Send",
            data: [10,25,15,30,12,15,20],   
        }],
    },
   ]