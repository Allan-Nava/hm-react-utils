export const marginCalculator = (scores: any) => {
  if (scores.length > 0) {

    let events = scores.map((item, index) => {
      item.minute = item.label.toString().includes("45+") ? item.minute = 45 : item.minute
      return item
    })
    events = events.filter((item) => item.minute !== 0)
    if (events.length > 0) {
      let last_event = Math.ceil(events[events.length - 1].minute)
      let population = new Array(Math.ceil(last_event / 10)).fill(0)
      events.map((item: any) => {
        population[Math.floor(item.minute / 10)] += 1
      })
      let max_starter = population.indexOf(Math.max(...population)) * 10
      let max_range = events.filter((item: any) => (item.minute > max_starter && max_starter + 10 > item.minute))
      if (max_range.length > 0) {
        if (max_range[max_range.length - 1].minute - max_range[0].minute > 1) {
          return max_range[max_range.length - 1].minute - max_range[0].minute + 3
        } else {
          return max_range[max_range.length - 1].minute - max_range[0].minute + 5
        }
      }
    }
  }
  return 8
}