//1






//2     
      let month = prompt('enter a month')
      let autumn = 'September' || 'October' || 'November';
      let winter = 'December' || 'January' || 'February';
      let spring = 'March' || 'April' || 'May';
      let summer = 'June' || 'July' || 'August';
      if (month.match(autumn)) {
          alert(`Autumn`)
      }
      else if (month.match(winter)) {
          alert(`Winter`)
      }
      else if (month.match(spring)) {
          alert(`Spring`)
      }
      else if (month.match(summer)) {
          alert(`Summer`)
      }
      else {
          alert(`thank you`)
      }

//3

      let day = prompt(`What is the day today?`)
      if (day == 'Saturday') {
          alert('Saturday is a weekend.')
      }

      else if (day == 'Sunday') {
          alert('Sunday is a weekend.')
      }
      else if (day == 'Tuesday') {
          alert('Tuesday is a working day.')
      }
      
      else if (day == 'Friday') {
          alert('Friday is a working day.')
      }
