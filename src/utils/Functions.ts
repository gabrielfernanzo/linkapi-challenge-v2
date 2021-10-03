import { SellOrder } from 'src/models/sell-order.model';

export function dealToSellOrder(deal: any) {
  const order: SellOrder = {
    code: deal.id,
    salesman_name: deal.owner_name,
    client_name: deal.person_name,
    client_email: deal.person_id.email[0].value,
    unit_value: deal.value,
    description: deal.description,
    products_qtt: deal.products_count,
  };
  return order;
}

export function toXmlSellOrder(sellOrderObj: SellOrder) {
  return `
      <?xml version="1.0" encoding="UTF-8"?>
      <pedido>
        <vendedor>${sellOrderObj.salesman_name}</vendedor>
        <cliente>
          <nome>${sellOrderObj.client_name}</nome>
          <email>${sellOrderObj.client_email}</email>
        </cliente>
        <transporte>
          <volume>
            <servico>SEDEX - CONTRATO</servico>
          </volume>
        </transporte>
        <itens>
          <item>
          <codigo>${sellOrderObj.code}</codigo>
          <descricao>${sellOrderObj.description}</descricao>
          <qtde>${sellOrderObj.products_qtt}</qtde>
          <vlr_unit>${sellOrderObj.unit_value}</vlr_unit>
          </item>
        </itens>
      </pedido>
      `;
}

export function dealsToDailyProfit(deals: any) {
  let ammount = 0;

  for (const { value, products_count } of deals) {
    ammount += value * products_count;
  }
  const formatedDeals = deals.map((d) =>
    dealToSellOrder({
      ...d,
      description: `Produto ${d.id} de ${d.org_id.name}`,
    }),
  );
  return {
    deals: formatedDeals,
    ammount,
    record_date: getCurrentDate(),
    updated_at: getCurrentTime(),
  };
}

export function getCurrentTime(): string {
  return Intl.DateTimeFormat('en-US', { timeStyle: 'medium' }).format(
    new Date(),
  );
}

export function getCurrentDate(): Date {
  return new Date(
    Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date()),
  );
}
