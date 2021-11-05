select WorkSchedule.EmployeeID,  WorkSchedule.WorkDate,
MIN(STR_TO_DATE(ptt.CardScan.Clock,'%d/%m/%Y %H:%i:%s') ) as ClockIn, 
MAX(STR_TO_DATE(ptt.CardScan.Clock,'%d/%m/%Y %H:%i:%s') ) as ClockOut
from ptt.WorkSchedule
left join ptt.CardScan on WorkSchedule.EmployeeId = CardScan.EmployeeId
where STR_TO_DATE(ptt.CardScan.Clock,'%d/%m/%Y %H:%i:%s') 
BETWEEN STR_TO_DATE(ptt.WorkSchedule.WorkDate,'%d/%m/%Y') 
and DATE_ADD(STR_TO_DATE(ptt.WorkSchedule.WorkDate,'%d/%m/%Y'), INTERVAL 1 DAY)
GROUP BY ptt.WorkSchedule.EmployeeId, ptt.WorkSchedule.WorkDate;