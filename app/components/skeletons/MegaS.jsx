import BotaoVoltar from "@/app/components/header/BotaoVoltar";

export default function MegaS({cor}) {
    return (
        <span className="max-w-sm mx-auto bg-white  shadow-lg rounded-lg overflow-hidden">
          <BotaoVoltar cor={`bg-${cor}-600`} />
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
  <div className={`bg-${cor}-600 p-4`}>
    <div className="h-6 bg-gray-300 rounded w-24 mx-auto"></div>
    <div className="h-4 bg-gray-300 rounded w-32 mt-2 mx-auto"></div>
    <div className="h-4 bg-gray-300 rounded w-20 mt-2 mx-auto"></div>
    <div className="mt-4">
      <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-24 mt-2 mx-auto"></div>
    </div>
  </div>
  <div className="p-6">
    <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
    <div className="h-8 bg-gray-300 rounded w-40 mt-2 mx-auto"></div>
    <div className="h-4 bg-gray-300 rounded w-24 mt-4"></div>
    <ul className="flex space-x-3 my-4">
      <li className="h-10 w-10 bg-gray-300 rounded-full"></li>
      <li className="h-10 w-10 bg-gray-300 rounded-full"></li>
      <li className="h-10 w-10 bg-gray-300 rounded-full"></li>
      <li className="h-10 w-10 bg-gray-300 rounded-full"></li>
      <li className="h-10 w-10 bg-gray-300 rounded-full"></li>
      <li className="h-10 w-10 bg-gray-300 rounded-full"></li>
    </ul>
  </div>
  <div>
    <table className="table-auto w-full border-collapse border text-xs border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border border-gray-300">
            <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
          </th>
          <th className="px-4 py-2 border border-gray-300">
            <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
          </th>
          <th className="px-4 py-2 border border-gray-300">
            <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="px-4 py-2 border border-gray-300 text-center">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
          <td className="px-4 py-2 border border-gray-300 text-center">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
          <td className="px-4 py-2 border border-gray-300">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-4 py-2 border border-gray-300 text-center">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
          <td className="px-4 py-2 border border-gray-300 text-center">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
          <td className="px-4 py-2 border border-gray-300">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
        </tr>
        <tr className="bg-white">
          <td className="px-4 py-2 border border-gray-300 text-center">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
          <td className="px-4 py-2 border border-gray-300 text-center">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
          <td className="px-4 py-2 border border-gray-300">
            <div className="h-4 bg-gray-300 rounded w-16 mx-auto"></div>
          </td>
        </tr>
      </tbody>
    </table>

    <div className="h-4 bg-gray-300 rounded w-32 mx-auto mt-4"></div>
    <div className="h-4 bg-gray-300 rounded w-24 mx-auto mt-2"></div>
  </div>
</div>

        </span>
      );
};
