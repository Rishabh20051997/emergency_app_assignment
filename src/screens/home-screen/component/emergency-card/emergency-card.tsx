import UICard from "../../../../widgets/ui-card"
import UIText from "../../../../widgets/ui-text"
import { formatDate, getFormattedTime } from "../../../../utils/date-utils"
import { styles } from "./emergency-card-style"

interface IEmergencyCardProps {
    dataItem: ITaskItem
}  

const EmergencyCard = ({
    dataItem,
}: IEmergencyCardProps) => {

    const { _id, noticeTime, respondTime } = dataItem
    return <UICard style={styles.cardContainer}>
        <UIText
                text={'Emergency Id : ' + _id }
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.userNameText}
            />
            <UIText
                text={'Notice Time: ' + formatDate(noticeTime) + '  ' + getFormattedTime(noticeTime)}
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.userNameText}
            />
            <UIText
                text={'Respond Time: ' + formatDate(respondTime) + '  ' + getFormattedTime(respondTime)}
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.userNameText}
            />
    </UICard>
}

export default EmergencyCard