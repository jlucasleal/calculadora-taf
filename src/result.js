import { utils, writeFile } from "xlsx"
import trashIcon from "./img/bin.png"

export function createResult() {
	const container = document.querySelector("#container")

	const resultBox = document.createElement("div")
	resultBox.id = "result-box"
	container.appendChild(resultBox)

	const table = document.createElement("table")
	table.id = "result-table"

	const header = document.createElement("thead")
	header.id = "header"

	const titleInputContainer = document.createElement("div")
	titleInputContainer.id = "title-input-container"
	resultBox.appendChild(titleInputContainer)
	const titleInput = document.createElement("input")
	titleInput.id = "doc-title"
	titleInput.type = "text"
	titleInput.maxLength = "45"
	titleInput.placeholder = "TAF Nº / SU / ANO"

	const titleInputLabel = document.createElement("label")
	titleInputLabel.textContent = "Título:"
	titleInputLabel.id = "title-input-label"
	titleInputLabel.setAttribute("for", "doc-title")

	titleInputContainer.appendChild(titleInputLabel)
	titleInputContainer.appendChild(titleInput)

	function sendTitle() {
		if (!document.querySelector("#header-row")) {
			const headerRow = document.createElement("tr")
			headerRow.id = "header-row"
			header.appendChild(headerRow)
			const headerTitle = document.createElement("th")
			headerTitle.id = "header-title"
			headerRow.appendChild(headerTitle)
		}

		const headerTitleNew = document.getElementById("header-title")
		headerTitleNew.textContent = titleInput.value

		headerTitleNew.setAttribute("colspan", 12)
	}

	titleInput.addEventListener("keyup", () => {
		sendTitle()
	})

	table.appendChild(header)

	const tableContainer = document.createElement("div")
	tableContainer.id = "table-container"
	resultBox.appendChild(tableContainer)

	tableContainer.appendChild(table)
}

export const headerArr = [
	"POSTO\nGRAD",
	"NOME",
	"IDADE",
	"CORRIDA",
	"ÍNDICE",
	"FLEXÃO",
	"ÍNDICE",
	"ABDOMINAL",
	"ÍNDICE",
	"BARRA",
	"ÍNDICE",
	`MENÇÃO\nGERAL`,
]

export function createRow(arr, id) {
	const pdfBtn = document.createElement("button")
	pdfBtn.id = "pdf-btn"
	pdfBtn.textContent = "Imprimir"

	const tableBtn = document.createElement("button")
	tableBtn.id = "table-btn"
	tableBtn.textContent = "Gerar Planilha"

	tableBtn.addEventListener("click", () => {
		const table = document.getElementById("result-table")

		const worksheet = utils.table_to_sheet(table)

		const wscols = [
			{ wch: 14 },
			{ wch: 14 },
			{ wch: 8 },
			{ wch: 8 },
			{ wch: 8 },
			{ wch: 8 },
			{ wch: 8 },
			{ wch: 12 },
			{ wch: 8 },
			{ wch: 8 },
			{ wch: 8 },
			{ wch: 14 },
		]

		worksheet[`!cols`] = wscols

		const workbook = utils.book_new()
		utils.book_append_sheet(workbook, worksheet, "sheet1")

		writeFile(workbook, "Tabela-taf.xlsx")
	})

	pdfBtn.addEventListener("click", () => {
		print()
	})

	if (!document.querySelector("tr")) {
		document.querySelector("#result-box").appendChild(pdfBtn)
		document.querySelector("#result-box").appendChild(tableBtn)
	}

	const table = document.querySelector("#result-table")

	const row = document.createElement("tr")
	row.classList.add("tr")
	table.appendChild(row)
	row.id = id

	const trash = document.createElement("img")
	trash.src = trashIcon
	trash.classList.add("trash-icon")
	trash.id = `trash-${id}`

	trash.addEventListener("click", () => {
		table.removeChild(row)
	})

	arr.forEach((element) => {
		const td = document.createElement("td")
		td.textContent = element
		row.appendChild(td)
		row.appendChild(trash)
	})
}
