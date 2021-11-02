import { eachDayOfInterval, format } from 'date-fns';
import { MarkedDateProps, DayProps } from '.';

import { getPlatformDate } from '../../utils/getPlatformDate';
import theme from '../../styles/theme';

export function generateInterval(start: DayProps, end: DayProps) {

    let interval: MarkedDateProps = { };

    const selectedInterval = eachDayOfInterval({ start: getPlatformDate(new Date(start.timestamp)), end: getPlatformDate(new Date(end.timestamp)) });

    selectedInterval.forEach((item) => {
        const date = format(item, 'yyyy-MM-dd');

        interval = {

            ...interval,

            [date]: {
                
                color: start.dateString === date || end.dateString === date ?
                    theme.colors.main : theme.colors.main_light,
    
                textColor: start.dateString === date || end.dateString === date ?
                    theme.colors.main_light : theme.colors.main

            }
    
        }
    });

    return interval;

}


