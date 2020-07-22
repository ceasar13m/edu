import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {useStyles} from "../../../hooks/useStyles";
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const Providing = (props) => {
    const classes = useStyles();
    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: props.isDrawerOpen,
            })}
        >
            <div className={classes.drawerHeader} />
            <Typography variant="h4">Никахлашырга ярамаган хатын-кызлар</Typography>
            <Typography paragraph>
                Никахның төп шарты булып ирнең харам булмаган хатын-кызга никахлашуы тора.
                Никахлашырга ярамаган хатын-кызлар ике төргә бүленә:
            </Typography>

            <Typography variant="h5">Мәңге харам булган хатын-кызлар</Typography>
            <Typography paragraph>
                <List>
                    <ListItem> Әнисе һәм өскә таба</ListItem>
                    <ListItem> Кызлары һәм аска таба</ListItem>
                    <ListItem> Бертуган апалары, сеңелләре һәм аска таба</ListItem>
                    <ListItem> Бертуган абый-энеләренең кызлары һәм аска таба</ListItem>
                </List>
            </Typography>
            <Typography variant="h5">Вакытлыча харам булган хатын-кызлар</Typography>
            <Typography paragraph>
                Никахның дөреслеге камил булсын өчен түбәндәге төрле хатын-кызларга
                өйләнү тыелган. Бу хатын кызлар вакытлыча харам. Аларны хәрам итүче
                сәбәпләр юкка чыгуга, алар хәләлгә әверелә. Мәсъәлән, хатыны үлсәб хатынының
                сеңлесе хәрам булудан туктый.
                <List>
                    <ListItem> Көферлек сәбәпле. <br />Мөселман ир мөшрикәб мәҗүсиб динсез хатын-кыз белән никахлаша алмый
                        иман китергәненә чаклы. Шулай ук мөслимә хатын-кыз мөшрик, мәҗүси яки башка дин
                        әһеленә никахлана алмый иман китергәненә чаклы (Бакара/221)</ListItem>

                    <ListItem> Өйләнү сәбәпле харам булган хатын кызлар</ListItem>
                    <ListItem> Сөт анасы ягыннан харам булган хатын кызлар</ListItem>
                    <ListItem> Хатын-кыз икенче берәүнең хатыны булу сәбәпле</ListItem>
                </List>
            </Typography>

        </main>
    );
};

export default connect(
    state => {
        return {
            isDrawerOpen: state.reducer.isDrawerOpen,
        }
    }
)(Providing);