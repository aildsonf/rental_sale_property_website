export default function formatCurrency(value: string) {
	const BRL = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	})

	return BRL.format(Number(value))
}
