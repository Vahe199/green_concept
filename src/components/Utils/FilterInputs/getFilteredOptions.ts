import get from "lodash/get";

type Props = {
  searchValue: string | number;
  array: any[];
  keyPath: string;
  valuePath: string;
  labelPath: string;
};

//  Ant select options
const getFilteredOptions = ({
  searchValue,
  array,
  keyPath,
  valuePath,
  labelPath,
}: Props) => {
  const filtered =
    searchValue?.toString()?.length > 0
      ? array.filter((value) => {
          return get(value, labelPath, "")
            .toString()
            .toLocaleUpperCase()
            .includes(searchValue.toString().toLocaleUpperCase());
        })
      : [];

debugger
  return (
    filtered.length
      ? [{ id: -1, [labelPath]: "Все" }, ...filtered]
      : [{ id: -1, [labelPath]: "Все" }]
  ).map((option: any) => ({
    key: get(option, keyPath, 0),
    value: get(option, labelPath) === "Все" ? "" : get(option, valuePath),
    label: get(option, labelPath),
  }));
};

export default getFilteredOptions;
