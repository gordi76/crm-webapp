document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Lead-Nachverfolgung',
                start: '2024-08-20T09:00:00',
                end: '2024-08-20T10:00:00'
            },
            {
                title: 'Kundengespräch - Müller GmbH',
                start: '2024-08-21T14:00:00',
                end: '2024-08-21T15:30:00'
            },
            {
                title: 'Verkaufsgespräch - Neue Produkte',
                start: '2024-08-22T10:30:00',
                end: '2024-08-22T12:30:00'
            },
            {
                title: 'Projektabgabe - CRM System',
                start: '2024-08-24'
            },
            {
                title: 'Follow-up Call - Schmidt AG',
                start: '2024-08-25T11:00:00',
                end: '2024-08-25T11:30:00'
            },
            {
                title: 'Team Meeting - Quartalsziele',
                start: '2024-08-26T13:00:00',
                end: '2024-08-26T14:00:00'
            },
            {
                title: 'Präsentation - Verkaufsstrategie',
                start: '2024-08-27T15:00:00',
                end: '2024-08-27T16:00:00'
            },
            {
                title: 'CRM-Training für Mitarbeiter',
                start: '2024-08-28T09:00:00',
                end: '2024-08-28T11:00:00'
            },
            {
                title: 'Kundenbesuch - Brandt KG',
                start: '2024-08-29T10:00:00',
                end: '2024-08-29T12:00:00'
            },
            {
                title: 'Marketing-Meeting',
                start: '2024-08-30T14:00:00',
                end: '2024-08-30T15:00:00'
            },
            {
                title: 'Review - Monatsberichte',
                start: '2024-08-31T16:00:00',
                end: '2024-08-31T17:00:00'
            }
        ]
    });
    calendar.render();
});