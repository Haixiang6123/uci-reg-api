export const courseDetailsAttr = {
    valign: 'top',
}
export const blueBarAttr = {
    class: 'blue-bar',
    bgcolor: 'navy'
}

// Given specific attribute object, check if this element has all attributes
export const validate = (element: CheerioElement, attr: object): boolean => {
    for (let [key, value] of Object.entries(attr)) {
        if (!element.attribs || !element.attribs[key] || element.attribs[key] !== value) {
            return false
        }
    }
    return true
}
