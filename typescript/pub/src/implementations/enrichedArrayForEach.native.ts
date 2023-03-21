import { A } from "../api.generated"

export const $$: A.enrichedArrayForEach = () => {
    return ($, $i) => {
        let length = $.__getLength()

        if (length === 0) {
            $i.onEmpty()
        } else {
            $i.onNotEmpty(($i) => {
                let current = 0
                $.__forEach(($) => {
                    $i({
                        isFirst: current === 0,
                        isLast: current === length - 1,
                        value: $,
                    })
                    current += 1
                })
            })
        }
    }
}