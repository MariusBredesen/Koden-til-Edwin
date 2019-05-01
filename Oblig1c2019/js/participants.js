let pList = document.getElementById('Participant');        // #Participants
fetch('js/participants_list.json')      
  .then(res => res.json())                                 // lager liste over deltakere fra json-fil
    .then(participants =>                             
      {
        participants.forEach(participant =>
          {
            let tr = document.createElement('TR');         // lager tablerow pluss fire columns
            tr.innerHTML = `<td>${participant.lastName}</td><td>${participant.givenName}</td><td>${participant.Email}</td><td>${participant.studyProgramme}</td>`;
              pList.appendChild(tr);
          })
      });
    
